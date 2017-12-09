import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Team from './team';
import TeamPlayer from './team.player';

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", nullable: false })
  firstName: string;

  @Column({ type: "varchar", nullable: false })
  lastName: string;

  @OneToMany(type => TeamPlayer, teamPlayer => teamPlayer.user)  
  teams: TeamPlayer[];
}
