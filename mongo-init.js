db.createUser({
  user: 'social_media_user',
  pwd: 'app_password',
  roles: [
    {
      role: 'readWrite',
      db: 'social-media-app',
    },
  ],
});
