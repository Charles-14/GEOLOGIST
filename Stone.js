class Stone{
	constructor(x,y)
	{
	   var options = {
		   'restitution':0.,
		   'friction':0.9,
		   'density':12
	   }
        this.body = Bodies.rectangle(x, y,155,90, options);
		this.width = 155;
		this.height = 90;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos = this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("green");
			rect(0, 0, this.width, this.height);
			pop()
	}

}