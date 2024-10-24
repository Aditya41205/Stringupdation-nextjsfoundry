-include .env
build :; forgebuild
deploy :; @forge script script/DeployStringUpadtion.s.sol --rpc-url $(SEPOLIA_RPC_URL) --private-key $(SEPOLIA_PRIVATE_KEY) --broadcast