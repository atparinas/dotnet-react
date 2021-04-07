import { makeAutoObservable, runInAction } from "mobx";
import agent from "../app/api/agent";
import { Activity } from "../models/activity";

class ActivityStore {
    
    activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor(){
        makeAutoObservable(this)
    }

    loadActivities = async () => {
        this.setLoadingInitial(true);

        try {
            const activities = await agent.Activities.list();
        
            activities.forEach(activity => {
                activity.date = activity.date.split('T')[0];
            });

            runInAction(() => {

                this.activities = activities
            })
            
            this.setLoadingInitial(false);

        } catch (error) {

            console.log(error);
            this.setLoadingInitial(false);
        }

    }


    loadActivity = async (id: string) => {
        this.setLoadingInitial(true)

        try {
            
            const activity = await agent.Activities.details(id);
            activity.date = activity.date.split('T')[0];

            this.selectedActivity = activity

            this.setLoadingInitial(false);

            return activity;

        } catch (error) {
            console.log(error)
            this.setLoadingInitial(false)
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectActivity = (id: string) => {
        this.selectedActivity = this.activities.find(activity => activity.id === id);
    }

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined
    }

    openForm = (id? : string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();

        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createActivity = async (activity: Activity) => {

        this.loading = true;

        try {
            
            await agent.Activities.create(activity)

            runInAction(() => {
                this.activities.push(activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })

        } catch (error) {
            console.log(error)
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateActivity = async (activity: Activity) => {
        this.loading = true;

        try {
            
            await agent.Activities.update(activity);

            runInAction(() => {
                const updatedActivity = this.activities.map(a => {

                    if(a.id === activity.id){
                        return activity;
                    }else {
                        return a;
                    }

                })

                this.activities = updatedActivity;
                this.loading = false;
                this.editMode = false;
                this.selectedActivity = activity;
            })


        } catch (error) {

            console.log(error);

            runInAction(() => {
                this.loading = false;
            })
        }
    }


    deleteActivity = async (id: string) => {
        this.loading = true;

        try {
            
            await agent.Activities.delete(id);

            runInAction(() => {

                this.activities = [...this.activities.filter(a => a.id !== id)]
                if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
                this.loading = false;
            })

        } catch (error) {
            console.log(error)

            runInAction(() => {
                this.loading = false;
            })
        }
    }

}

export default ActivityStore;