using API.Login;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers;

    public class ActivitiesController : BaseApiController
    {
    private readonly ActivitiesLogic _logic;

        public ActivitiesController(DataContext context)
        {
  
            _logic = new ActivitiesLogic(context);
        }

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _logic.GetActivities();
        }

        [HttpGet("{id}")] // api/activities/id
        public async Task<ActionResult<Activity>> GetActivitiy(Guid id)
        {
            return await _logic.GetActivitiy(id);
        }
}
