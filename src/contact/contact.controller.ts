import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { EmailService } from 'src/email/email.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly emailService: EmailService) {}

    @Post()
    async contactUsPost(@Body() body: { subject: string; name: string; email: string; mobile: string; message: string; }){
        await this.emailService.sendEmail('vijayshekhat@gmail.com', body.subject, 'contact', {
            name: body.name,
            email: body.email,
            mobile: body.mobile,
            message: body.message,
        });

        return { message: 'Contact details sent successfully!' };
    }
}
