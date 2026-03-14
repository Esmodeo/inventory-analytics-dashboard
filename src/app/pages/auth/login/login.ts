import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseError } from 'firebase/app';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    MessageModule,
    PasswordModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  errorMessage = '';

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  async onRegister(): Promise<void> {
    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();

    try {
      const user = await this.authService.register(email, password);
      console.log('Registered user:', user);
    } catch (error: unknown) {
      this.errorMessage = this.formatAuthError(error);
    }
  }

  async onLogin(): Promise<void> {
    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();

    try {
      const user = await this.authService.login(email, password);
      console.log('Logged in user:', user);
    } catch (error: unknown) {
      this.errorMessage = this.formatAuthError(error);
    }
  }

  private formatAuthError(error: unknown): string {
    if (error instanceof FirebaseError) {
      return `${error.code}: ${error.message}`;
    }

    if (error instanceof Error) {
      return error.message;
    }

    return 'Authentication failed';
  }
}
