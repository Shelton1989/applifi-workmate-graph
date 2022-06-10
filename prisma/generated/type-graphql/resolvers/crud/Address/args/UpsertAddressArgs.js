"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateInput_1 = require("../../../inputs/AddressCreateInput");
const AddressUpdateInput_1 = require("../../../inputs/AddressUpdateInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let UpsertAddressArgs = class UpsertAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], UpsertAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateInput_1.AddressCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateInput_1.AddressCreateInput)
], UpsertAddressArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateInput_1.AddressUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateInput_1.AddressUpdateInput)
], UpsertAddressArgs.prototype, "update", void 0);
UpsertAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAddressArgs);
exports.UpsertAddressArgs = UpsertAddressArgs;
