import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(authDto: CreateAuthDto) {
    const user = await this.userRepo.findOne({
      where: { username: authDto.username },
    });

    if (user) {
      if (bcrypt.compareSync(authDto.password, user.password)) {
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        };

        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    }

    throw new UnauthorizedException();
  }
}
