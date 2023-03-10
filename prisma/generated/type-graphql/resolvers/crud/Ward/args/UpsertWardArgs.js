"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateInput_1 = require("../../../inputs/WardCreateInput");
const WardUpdateInput_1 = require("../../../inputs/WardUpdateInput");
const WardWhereUniqueInput_1 = require("../../../inputs/WardWhereUniqueInput");
let UpsertWardArgs = class UpsertWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], UpsertWardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateInput_1.WardCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardCreateInput_1.WardCreateInput)
], UpsertWardArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardUpdateInput_1.WardUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardUpdateInput_1.WardUpdateInput)
], UpsertWardArgs.prototype, "update", void 0);
UpsertWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertWardArgs);
exports.UpsertWardArgs = UpsertWardArgs;
