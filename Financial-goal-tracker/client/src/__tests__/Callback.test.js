import React from 'react'
import { render, cleanup,screen, fireEvent, within, getAllByText, getByText } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import CallBack from '../components/Callback'
import fetchMock from 'fetch-mock';

it('should take a snapshot', () => {
    const { asFragment, getByTestId } = render(<Router><CallBack /></Router>)
    expect(asFragment(<Router><CallBack /></Router>)).toMatchSnapshot()
});


it('Checks', async() => {
    const { asFragment, getByTestId } = render(<Router><CallBack /></Router>)
    window.location.href = "http://localhost:3000/callback#access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlVIRXZTMXVIbE5oLWJrekpidC1SdyJ9.eyJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcl9tZXRhZGF0YSI6InNoZWlrZmFyZWVkMzgxOUBnbWFpbC5jb20iLCJpc3MiOiJodHRwczovL2Rldi11bTk1NTY2aC5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTUzMjA1NzU2MDE5MDQ1NDExNDIiLCJhdWQiOlsibG9naW4iLCJodHRwczovL2Rldi11bTk1NTY2aC5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTkxMzI4Mjc5LCJleHAiOjE1OTEzMzU0NzksImF6cCI6InJ2QTBBdHE2aHhFbUpIVldTRmVuUFRjaXA2SGhHVkRUIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.zYMr6Ii--j0ddy4vVLsQ-N_-mUPtzaid756r8a2gieL0yhrPqMXb7hMXrqv4vJ8PKtdKP5oXuRWXvoJS1beQZiBaj4LWfS2C2hZcJMUqSBDZQ7MBwVwLhAzuL8At0U_2ieJVAj6AWNty950m4enlV1yBPByARcqgkQkhpYh0EruhdSS_BbgXbGJuyv4xxN8eMNYr6uT2bFiASxGmlErRDQ-GUC4D1mYFn3rTOtDluOuTtwGbsOPr20nffkybzRKaDzhqJG3dDn4fOaYjSuo-bPsHospGmIcZ4W-BR6xQB1quOcekz5IikAFyIWjjf6fwhfKLocCksnwMzXdThYLyPA&scope=openid%20profile%20email&expires_in=7200&token_type=Bearer&id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlVIRXZTMXVIbE5oLWJrekpidC1SdyJ9.eyJnaXZlbl9uYW1lIjoiU0hFSUsiLCJmYW1pbHlfbmFtZSI6IkZBUkVFRCIsIm5pY2tuYW1lIjoic2hlaWtmYXJlZWQzODE5IiwibmFtZSI6IlNIRUlLIEZBUkVFRCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZ0xjYVEyRmtONndSS2NlS1lzWTJyRC1DMDFDeW52T1liSFg2bmciLCJsb2NhbGUiOiJlbi1HQiIsInVwZGF0ZWRfYXQiOiIyMDIwLTA2LTA1VDAzOjM3OjU5LjUxN1oiLCJlbWFpbCI6InNoZWlrZmFyZWVkMzgxOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtdW05NTU2NmguYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE1MzIwNTc1NjAxOTA0NTQxMTQyIiwiYXVkIjoicnZBMEF0cTZoeEVtSkhWV1NGZW5QVGNpcDZIaEdWRFQiLCJpYXQiOjE1OTEzMjgyNzksImV4cCI6MTU5MTM2NDI3OSwiYXRfaGFzaCI6IkZodmhiWGNTQmlhXzZrV2dlclhldkEiLCJub25jZSI6InRlc3QifQ.gky05evYYHcnzGEXPCbxtmIfvXaI1WhX3tBcNUAEnTmzVQ7mDDaDjX8v81dm6xKzhUJFYQGqWUit7lqLNkObSxD51ILGzzGfxvJHsMfdD1fy9qh1fYJ1AmxDLQ-CRtww5inf8NxVyQ_0QQvyAGsSetGEvbtL-hbe5FiKF5MN66jHjhcSzLPmhbr0ZuQjEZ_Lyo7RFDa8HYlYgku846PG6-cdT0aimpiZQoPf-V_WzWw6Lpj9r42hYjk4zy0JI6zhuCylKUmczguuygAd5EdBLY5JrKXnDRvDmhbEPfEVKAwI-c2kj2GDBAy8oNZPYqROsPc1cmvNvoQBKDB-ykI-vA";
    fetchMock.mock("http://localhost:8080/api/user/users",200)
    const res = await fetch("http://localhost:8080/api/user/users")
    expect(res.ok).toBeTruthy;
   
});
