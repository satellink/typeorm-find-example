// import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

import Team from './team';
import User from './user';
import { Entity, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export default class TeamPlayer {

  @ManyToOne(type => Team, team => team.players, { nullable: false, primary: true })
  team: Team;

  @ManyToOne(type => User, user => user.teams, { nullable: false, primary: true })
  user: User;

  @Column("int")
  number: number;
}