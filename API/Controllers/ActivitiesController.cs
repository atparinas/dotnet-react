using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Activities;
using Application.Core;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ActivitiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<Result<List<Activity>>>> GetActivities()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Result<Activity>>> GetActivity(Guid id)
        {
            var result = await Mediator.Send(new Details.Query{Id = id});
            
            return HandleResult(result);
        }


        // WHen using IActionResult we have access to OK, NotFound, without the need
        // to return something
        [HttpPost]
        public async Task<ActionResult<Result<Unit>>> CreateActivity(Activity activity)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity}));
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<Result<Unit>>> UpdateActivity(Guid id, Activity activity)
        {
            activity.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command{Activity = activity}));
        }


         [HttpDelete("{id}")]
        public async Task<ActionResult<Result<Unit>>> DeleteActivity(Guid id)
        {
        
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }

    }
}