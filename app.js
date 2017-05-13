// THE VUE INSTANCE

new Vue({
  el: "#events",
  data:{
    event:{ name: '', description: '', date:''},
    events: []
  },
  mounted: function(){
    this.$nextTick(function(){
      this.fetchEvents();
    });
  },
  methods:{
    fetchEvents: function(){
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2017-09-10'
        },
        {
          id: 2,
          name: 'The Witch Premiere',
          description: 'The Witch comes to theatres.',
          date: '2017-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film, and interactive festival in Austin, TX.',
          date: '2018-02-02'
        },
        {
          id: 4,
          name: 'TX Round Up',
          description: 'Vintage hot rod and motorcycle festival in Austin, TX.',
          date: '2018-02-02'
        }
      ];

        // this.$http.get('events').then(function(events){
        //   this.events = events;
        // })


      this.events = events;
    },
    addEvent: function(){
      if(this.event.name){
        this.events.push(this.event);
        this.event= { name: '', description: '', date: ''};
      }
    },
    deleteEvent: function(index){
      if(confirm('Are you sure you want to delete this event?')){
        this.events.splice(index,1 );
      }
    }
  }
});
