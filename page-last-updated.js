<script type="text/javascript">
    var updated = new Date({{content.updated}});
    var created = new Date({{content.created}});
    var publish_date = "{{content.publish_date}}";
    document.getElementById("lastUpdated").innerHTML = ('Page last updated:') + (updated.getMonth()+1)+"/"+updated.getDate()+"/"+updated.getFullYear();
</script>
