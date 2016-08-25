function getPageUpdatedDate()
{
    
    $.ajax({
        type: "GET",
        url: "http://www.yoursiteurl.com/sitemap.xml",
        cache: false,
        dataType: "xml",
        success: function(xml) {
            console.log(xml)
            var cururl = window.location.href; 
            var lastChar = cururl.slice(-1);
            if(lastChar == '/'){
               cururl = cururl.slice(0, -1);
            }
            
            $(xml).find('url').each(function(){
                var url = $(this).find("loc").text().trim();
                var date = $(this).find("lastmod").text();
                if(cururl == url){
                    
                    var d = new Date(date.replace(/-/g, "/"));
                    var curr_date = d.getDate();
                    var curr_month = d.getMonth();
                    curr_month++;
                    var curr_year = d.getFullYear();
                    date = curr_month + "/" + curr_date + "/" + curr_year;
                    $('.last-update span').html('Page Last Updated: '+ date);
                }
            });
        }
    });
}
