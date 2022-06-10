"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutOrdersInput_1 = require("../inputs/AddressCreateOrConnectWithoutOrdersInput");
const AddressCreateWithoutOrdersInput_1 = require("../inputs/AddressCreateWithoutOrdersInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateNestedOneWithoutOrdersInput = class AddressCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput)
], AddressCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutOrdersInput_1.AddressCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutOrdersInput_1.AddressCreateOrConnectWithoutOrdersInput)
], AddressCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
AddressCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], AddressCreateNestedOneWithoutOrdersInput);
exports.AddressCreateNestedOneWithoutOrdersInput = AddressCreateNestedOneWithoutOrdersInput;
