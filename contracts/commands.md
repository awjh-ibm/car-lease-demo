cd car-lease-sample
npm install
npm run build
npm start -- --peer.address=peer:7052 --chaincode-id-name mycc:0

peer chaincode install -n mycc -v 0 -p /opt/gopath/src/chaincodedev/chaincode/car-lease-sample -l node
peer chaincode instantiate -n mycc -v 0 -l node -c '{"Args":[]}' -C myc

peer chaincode invoke -n mycc -c '{"Args":["createCar", "Enzo", "Blue"]}' -C myc

peer chaincode query -n mycc -c '{"Args":["org.hyperledger.fabric:GetMetadata"]}' -C myc
peer chaincode query -n mycc -c '{"Args":["getAllCars"]}' -C myc