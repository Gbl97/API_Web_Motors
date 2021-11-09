const connection = require('./mysql_connection');

const createModel = async ({ marca, modelo, versao, ano, quilometragem, observacao }) => {
	const query = `INSERT INTO tb_AnuncioWebmotors (marca, modelo, versao, ano, quilometragem, observacao )
  VALUES (?,?,?,?,?,?)`;

	await connection.execute(query, [marca, modelo, versao, ano, quilometragem, observacao]);

	return { isCreated: true };
};

const updateModel = async ({ id, marca, modelo, versao, ano, quilometragem, observacao }) => {
	const queryUp = `UPDATE tb_AnuncioWebmotors SET Marca=?, Modelo=?,Versao=?, Ano=?, 
  Quilometragem=?, Observacao=?
  WHERE ID=?`;

	const queryGetId = 'SELECT * FROM tb_AnuncioWebmotors WHERE id=?';

	await connection.execute(queryUp, [marca, modelo, versao, ano, quilometragem, observacao, id]);

	const [[result]] = await connection.execute(queryGetId, [id]);

	return result;
};

module.exports = {
	createModel,
	updateModel,
};