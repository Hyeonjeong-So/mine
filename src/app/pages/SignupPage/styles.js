import React from 'react';
// import Link from 'react-router-dom';

// import {
//   Alert,
//   Avatar,
//   Box,
//   Button,
//   Container,
//   Grid,
//   TextField,
//   Typography,
// } from '@mui/material';
// import TagIcon from '@mui/icons-material/Tag';

// const SignupPageStyles = () => {
//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100%',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <TagIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           회원가입
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 name="name"
//                 required
//                 fullWidth
//                 label="닉네임"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="email"
//                 required
//                 fullWidth
//                 label="이메일 주소"
//                 autoComplete="off"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="password"
//                 required
//                 fullWidth
//                 label="비밀번호"
//                 type="password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 name="confirmPassword"
//                 required
//                 fullWidth
//                 label="비밀번호 확인"
//                 type="password"
//               />
//             </Grid>
//           </Grid>
//           {error ? (
//             <Alert sx={{ mt: 3 }} severity="error">
//               {error}
//             </Alert>
//           ) : null}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="secondary"
//             loading={loading}
//             sx={{ mt: 3, mb: 2 }}
//           >
//             회원가입
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link to="/login" style={{ textDecoration: 'none' }}>
//                 이미 계정이 있나요? 로그인으로 이동
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignupPageStyles;
