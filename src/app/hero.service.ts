import { Injectable } from '@angular/core'
import { MessageService } from './message.service'
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HeroService {
    constructor(private messageService: MessageService)
    {

    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id))
    }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES)
    }
}