-- TABLE USER
-- Todas las contraseñas se cifrarán utilizando SHA1
CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- CLIENTS TABLE
CREATE TABLE clients (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  telefono VARCHAR(255),
  busto VARCHAR(255),
  talle VARCHAR(255),
  espalda VARCHAR(255),
  cintura VARCHAR(255),
  base VARCHAR(255),
  largoblusa VARCHAR(255),
  largopantalon VARCHAR(255),
  falda VARCHAR(255),
  largototal VARCHAR(255),
  cinturafalda VARCHAR(255),
  cinturapantalon VARCHAR(255),
  alturabusto VARCHAR(255),
  separacionbusto VARCHAR(255),
  escote VARCHAR(255),
  manga VARCHAR(255),
  user_id INT(11),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id)
);


-- TABLE PEDIDOS
CREATE TABLE pedidos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  fechaentrega VARCHAR(255) ,
  descripcion VARCHAR(255) NOT NULL,
  client_id INT(11),
  PRIMARY KEY (id),
  CONSTRAINT fk_client FOREIGN KEY(client_id) REFERENCES clients(id)
);
