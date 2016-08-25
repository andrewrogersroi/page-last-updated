# Hubspot Page Last Updated Script
Use javascript and a sitemap.xml file to show when a page was last updated.

Step 1. Copy and Past code to your project.
<br>
<code>{
    var updated = new Date({{content.updated}});
    var created = new Date({{content.created}});
    var publish_date = "{{content.publish_date}}";
    document.getElementById("lastUpdated").innerHTML = ('Page last updated:') + (updated.getMonth()+1)+"/"+updated.getDate()+"/"+updated.getFullYear();
}</code>


Step 3. Add a div to your site with the id of "lastUpdated".

Special thanks to AJ LaPorte for helping me work this code out!
