export function validateInputs(value:number)
{
	//some code here to validate inputs
	if (isNaN(value))
	{
		return false;
	}
	else
	{
		return true;
	}
}
