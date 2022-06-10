"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressScalarWhereInput_1 = require("../inputs/AddressScalarWhereInput");
const AddressUpdateManyMutationInput_1 = require("../inputs/AddressUpdateManyMutationInput");
let AddressUpdateManyWithWhereWithoutUserInput = class AddressUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressScalarWhereInput_1.AddressScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressScalarWhereInput_1.AddressScalarWhereInput)
], AddressUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyMutationInput_1.AddressUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateManyMutationInput_1.AddressUpdateManyMutationInput)
], AddressUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
AddressUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], AddressUpdateManyWithWhereWithoutUserInput);
exports.AddressUpdateManyWithWhereWithoutUserInput = AddressUpdateManyWithWhereWithoutUserInput;
