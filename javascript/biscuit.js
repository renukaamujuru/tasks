function movieTickets(fname,location1,price,theater,hero){
		this.fname=fname;
		this.location1=location1;
		this.price=price;
		this.theater=theater;
		this.hero=hero;
			/*return function(){
				
				console.log("movieName="+fname);
				console.log("location="+location1);
				console.log("price="+price);
				console.log("theater="+theater);
				console.log("hero="+hero);
				
			}
*/		}

		var movie1 = new movieTickets("fidaa","kp",99,"nsdjfk","shourya");
         //movie1();
         console.log(movie1.location1);