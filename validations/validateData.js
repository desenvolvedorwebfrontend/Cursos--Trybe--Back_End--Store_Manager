const express = require('express');

express();

function invalidData(id, name, quantity) {
  return {
    message: `Dados inválidos: ${id} - ${name} - ${quantity}`,
  };
}

module.exports = invalidData;