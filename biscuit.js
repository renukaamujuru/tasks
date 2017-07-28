function movieTickets(fname,location,price){
		
			return function(theater,hero){
				
				console.log("movieName="+fname);
				console.log("location="+location);
				console.log("price="+price);
				console.log("theater="+theater);
				console.log("hero="+hero);
				
			
			}
		}

		 var movie1 = new movieTickets("fidaa","kp",99)("nsdjfk","shourya");
         /*var movie2=new movieTickets("ninu kori","mall",150)("","");*/
         /*movie2("name","location","price");*//**/
       /* console.log(movie1.fname);
         console.log(movie1.location);
         */
         console.log(movieTickets.fname);