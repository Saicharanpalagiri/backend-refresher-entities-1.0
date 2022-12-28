import { Column, Entity, ManyToOne } from 'typeorm';
import { ContentType } from '../../../backend-refresher-1.0-dtos/src/enums/contentType.enum';
import { EntityBase } from './entityBase';
import { User } from './user.entity';
import { UserDto } from '../../../backend-refresher-1.0-dtos/src/dtos/user.dto';

@Entity()
export class Content extends EntityBase {
  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
    default: ContentType.POST,
  })
  type: ContentType; /// post and poll only

  @Column()
  body: string;

  @Column()
  imageUrls: string;

  @Column()
  videoUrl: string;

  @ManyToOne(() => User, (user) => user.contents)
  user: UserDto;

  // userId,
  // groupId 
}