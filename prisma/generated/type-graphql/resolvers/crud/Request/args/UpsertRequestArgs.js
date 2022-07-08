"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateInput_1 = require("../../../inputs/RequestCreateInput");
const RequestUpdateInput_1 = require("../../../inputs/RequestUpdateInput");
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
let UpsertRequestArgs = class UpsertRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], UpsertRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateInput_1.RequestCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestCreateInput_1.RequestCreateInput)
], UpsertRequestArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateInput_1.RequestUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestUpdateInput_1.RequestUpdateInput)
], UpsertRequestArgs.prototype, "update", void 0);
UpsertRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertRequestArgs);
exports.UpsertRequestArgs = UpsertRequestArgs;
