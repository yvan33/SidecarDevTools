Sidecar Debugger Tool
========================
This is an Google Chrome devtools extension that will help you to be more productive when developing on SugarCRM 7.x.

## Installing
### For regular users:
1. Download it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/sidecar-debugger-tool/dailecjkmhlppgfhilhojhcbikbmhhlb)
### For contributors:
1. Clone this repo
2. Go to *Tools -> Extensions* in Google Chrome
3. Check *Developer mode* and click *Load unpacked extension*
4. Go to the cloned repo directory and choose the 'src' folder.
5. When you make changes to the code, you just need to close the devtools on you Sugar instance, refresh the 'Extensions' page in Chrome and reopen the Sidecar devtools.

## Using

1. Once in your SugarCRM instance, open Chrome devtools.
2. Click on the new tab called SugarDebug.
3. Check the checkbox "Start Sidecar Debug Mode" in the "Settings tab".
4. Enjoy!

## Contributing

#### Requirement:
You need to have installed: [node.js](https://nodejs.org/), [handlebars](http://handlebarsjs.com/) and [sass](http://sass-lang.com/)

#### Steps:
1. Once the extension is installed, navigate to the repo folder (SidecarDevTools) via terminal.
2. Run 'npm install'
3. Run 'grunt' to watch templates and scss files and automatically compile them.

## Features

* $view console variable after inspecting a DOM Element (it points to the closest parent Sidecar Component).
* In **SugarDebug Panel**, you will find different several tabs:
  - ***Application Stream:*** A timeline of what is happening in the app. It shows the methods that are called and the events that are triggered. For each of them, you have access to the passed arguments and the component object.
  - ***Structure:*** A hierarchical tree representing the Sugar components of the current page.
  - ***Render times:*** Allows you to measure the render duration of the different fields.
  - ***Generate records:*** An easy way to generate records in your SugarCRM instance.

## Notes

This extension is based on the [backbone-devtools](https://github.com/spect88/backbone-devtools) extension.
