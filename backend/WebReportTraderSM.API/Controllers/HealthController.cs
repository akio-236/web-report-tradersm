using Microsoft.AspNetCore.Mvc;

namespace WebReportTraderSM.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            Status = "Healthy",
            Message = "WebReportTraderSM API is running."
        });
    }
}