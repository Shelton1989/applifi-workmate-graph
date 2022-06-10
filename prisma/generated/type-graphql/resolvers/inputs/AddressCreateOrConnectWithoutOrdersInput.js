"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateWithoutOrdersInput_1 = require("../inputs/AddressCreateWithoutOrdersInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateOrConnectWithoutOrdersInput = class AddressCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput)
], AddressCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
AddressCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], AddressCreateOrConnectWithoutOrdersInput);
exports.AddressCreateOrConnectWithoutOrdersInput = AddressCreateOrConnectWithoutOrdersInput;
