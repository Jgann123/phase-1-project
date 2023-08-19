function ajaxCall() {
   console.log("ajax call is firing!")
   $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Ilt0n51VEcZ5oT8ImFifRM19ZAtUjEpY",
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);
                  // Parse the response.
                  // Do other things.
               },
      error: function(xhr, status, err) {
                  // This time, we do not end up here!
               }
    });
}
