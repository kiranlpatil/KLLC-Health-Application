import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  searchText: string;
 
  transform(items: any[], searchText: string, fieldName: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return []; }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (item && item[fieldName]) {
        return (item[fieldName].toLowerCase().indexOf(searchText.toLowerCase()) > -1 );
 
      }
      return false;
    });
  }

}
