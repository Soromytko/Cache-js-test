class CacheContext
{
	constructor(value, counter)
	{
		this.value = value;
		this.counter = counter;
	}
}

export class Cache
{
	constructor()
	{
		this.data = [];
	}
	
	get(key)
	{
		let i = this.data.findIndex(x => x.key == key);
		
		if(i < 0)
			return null;
		
		let resultItem = this.data[i];
		
		if(--this.data[i].counter == 0)
			this.data.splice(i, 1);
		
		return resultItem;
	}

	add(key, value, counter = 1)
	{
		let i = this.data.findIndex(x => x.key == key);
		
		if(i > 0)
		{
			this.data[i].key = key;
			this.data[i].value = value;
			this.data[i].counter = counter;
		}
		else
		{
			this.data.push(new CacheContext(key, value, counter));
		}
	}
	
	getStatistics(key)
	{
		return this.data;
	}
	
	test()
	{
		
		return true;
	}
	
}
//export {Cache}


