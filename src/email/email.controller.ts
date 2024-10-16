import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post('send')
    async sendEmail(
        @Body() body: { to: string; subject: string; text: string },
    ) {
        await this.emailService.sendEmail(body.to, body.subject, 'template', {
        text: body.text,
        });
        return { message: 'Email sent successfully!' };
    }
}
