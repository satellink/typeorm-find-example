
import TeamPlayer from './team.player';
import User from './user';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Team {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @OneToMany(type => TeamPlayer, teamPlayer => teamPlayer.team)
  players: TeamPlayer[];
}