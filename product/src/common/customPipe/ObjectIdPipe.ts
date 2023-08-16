import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class ObjectIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'param' && metadata.data === 'id') {
      if (!mongoose.Types.ObjectId.isValid(value))
        throw new BadRequestException('Id must be UUID.');
      return value;
    }

    return value;
  }
}
