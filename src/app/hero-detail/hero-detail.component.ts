import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common'
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    this.heroService.getHero(+this.route.snapshot.params.id).subscribe(hero => this.hero = hero);
  }
}
