"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var fs = require("file-system");
var bghttp = require("nativescript-background-http");
var vm = new observable_1.Observable();
function navigatingTo(args) {
    var page = args.object;
    vm.set("uploadStatus", "File not uploaded yet!");
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
function getAndUploadPDF() {
    /* FILE PICK UP PART */
    // basic folder we can access via file-system (example for iOS but also valid for Android)
    var documents = fs.knownFolders.documents(); // documents folder on iOS device
    var currentApp = fs.knownFolders.currentApp(); // the current applicaiton "app" folder
    var temp = fs.knownFolders.temp(); // the device temp folder
    console.log("currentApp: " + currentApp.path);
    var file = currentApp.getFile("sample-pdf.pdf");
    console.log("file.path: " + file.path);
    /* UPLOAD PART */
    var session = bghttp.session("file-upload");
    var request = {
        url: "https://httpbin.org/post",
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "File-Name": "sample-pdf.pdf"
        },
        description: "{ 'uploading': 'sample-pdf.pdf' }"
    };
    var task = session.uploadFile(file.path, request);
    task.on("progress", logEvent);
    task.on("error", logEvent);
    task.on("complete", done);
}
exports.getAndUploadPDF = getAndUploadPDF;
function logEvent(err) {
    console.dir(err);
}
function done() {
    vm.set("uploadStatus", "File uploaded!");
    console.log("complete");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBRXhELGdDQUFrQztBQUNsQyxxREFBdUQ7QUFFdkQsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFMUIsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3QixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFMRCxvQ0FLQztBQUVEO0lBRUksdUJBQXVCO0lBQ3ZCLDBGQUEwRjtJQUMxRixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsaUNBQWlDO0lBQzlFLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7SUFDdEYsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QjtJQUU1RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUMsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUd2QyxpQkFBaUI7SUFDakIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1QyxJQUFJLE9BQU8sR0FBRztRQUNWLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsMEJBQTBCO1lBQzFDLFdBQVcsRUFBRSxnQkFBZ0I7U0FDaEM7UUFDRCxXQUFXLEVBQUUsbUNBQW1DO0tBQ25ELENBQUM7SUFFRixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQTlCRCwwQ0E4QkM7QUFFRCxrQkFBa0IsR0FBRztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFFRDtJQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gXCJuYXRpdmVzY3JpcHQtYmFja2dyb3VuZC1odHRwXCI7XG5cbmxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIHZtLnNldChcInVwbG9hZFN0YXR1c1wiLCBcIkZpbGUgbm90IHVwbG9hZGVkIHlldCFcIik7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5kVXBsb2FkUERGKCkge1xuXG4gICAgLyogRklMRSBQSUNLIFVQIFBBUlQgKi9cbiAgICAvLyBiYXNpYyBmb2xkZXIgd2UgY2FuIGFjY2VzcyB2aWEgZmlsZS1zeXN0ZW0gKGV4YW1wbGUgZm9yIGlPUyBidXQgYWxzbyB2YWxpZCBmb3IgQW5kcm9pZClcbiAgICBsZXQgZG9jdW1lbnRzID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpOyAvLyBkb2N1bWVudHMgZm9sZGVyIG9uIGlPUyBkZXZpY2VcbiAgICBsZXQgY3VycmVudEFwcCA9IGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7IC8vIHRoZSBjdXJyZW50IGFwcGxpY2FpdG9uIFwiYXBwXCIgZm9sZGVyXG4gICAgbGV0IHRlbXAgPSBmcy5rbm93bkZvbGRlcnMudGVtcCgpOyAvLyB0aGUgZGV2aWNlIHRlbXAgZm9sZGVyXG5cbiAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRBcHA6IFwiICsgY3VycmVudEFwcC5wYXRoKTtcblxuICAgIGxldCBmaWxlID0gY3VycmVudEFwcC5nZXRGaWxlKFwic2FtcGxlLXBkZi5wZGZcIik7XG4gICAgY29uc29sZS5sb2coXCJmaWxlLnBhdGg6IFwiICsgZmlsZS5wYXRoKTtcblxuXG4gICAgLyogVVBMT0FEIFBBUlQgKi9cbiAgICB2YXIgc2Vzc2lvbiA9IGJnaHR0cC5zZXNzaW9uKFwiZmlsZS11cGxvYWRcIik7XG4gICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIHVybDogXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgICAgICAgIFwiRmlsZS1OYW1lXCI6IFwic2FtcGxlLXBkZi5wZGZcIlxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ7ICd1cGxvYWRpbmcnOiAnc2FtcGxlLXBkZi5wZGYnIH1cIlxuICAgIH07XG5cbiAgICB2YXIgdGFzayA9IHNlc3Npb24udXBsb2FkRmlsZShmaWxlLnBhdGgsIHJlcXVlc3QpO1xuICAgIHRhc2sub24oXCJwcm9ncmVzc1wiLCBsb2dFdmVudCk7XG4gICAgdGFzay5vbihcImVycm9yXCIsIGxvZ0V2ZW50KTtcbiAgICB0YXNrLm9uKFwiY29tcGxldGVcIiwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGxvZ0V2ZW50KGVycikge1xuICAgIGNvbnNvbGUuZGlyKGVycik7XG59XG5cbmZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgdm0uc2V0KFwidXBsb2FkU3RhdHVzXCIsIFwiRmlsZSB1cGxvYWRlZCFcIik7XG4gICAgY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcbn0iXX0=