import { Pipe, PipeTransform } from '@angular/core';
import { IAlumns } from '../escuela/alumnsir';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: IAlumns[], args: string): IAlumns[] {
    let filter: string  = args ? args.toLocaleLowerCase():'';

    return filter ? value.filter((alumno: IAlumns)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter) != -1): value;
  }
}
