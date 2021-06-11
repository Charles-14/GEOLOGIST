class Iron{
	constructor(x,y)
	{
	   var options = {
		   'restitution':0.,
		   'friction':3,
		   'density':30
	   }
        this.body = Bodies.rectangle(x, y,75,75, options);
		this.width = 75;
		this.height = 75;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos = this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("brown");
			rect(0, 0, this.width, this.height);
			pop()
	}

}