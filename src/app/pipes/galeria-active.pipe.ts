import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'galeriaActive'
})
export class GaleriaActivePipe implements PipeTransform {

  transform(value: any, args?: any): any 
  {
    switch(value)
    {
    	case 0:
    		return 'item active';
    	break;
    	default:
    		return 'item';
    	break;
    }
  }

}
