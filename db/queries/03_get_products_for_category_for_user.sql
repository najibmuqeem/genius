SELECT *
FROM products
JOIN categories ON category_id = categories.id
WHERE user_id = 1 AND category_id = 2;