SELECT *
FROM users
JOIN friends on user_1_id = users.id
WHERE user_1_id = 1;