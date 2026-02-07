using System.Diagnostics;

var workingDir = Directory.GetCurrentDirectory();
var argsText = "run --project src\\VisorHR.Api";

using var process = new Process
{
    StartInfo = new ProcessStartInfo("dotnet", argsText)
    {
        WorkingDirectory = workingDir,
        UseShellExecute = false
    }
};

Console.CancelKeyPress += (_, e) =>
{
    if (!process.HasExited)
    {
        process.Kill(true);
    }

    e.Cancel = true;
};

process.Start();
process.WaitForExit();
return process.ExitCode;
