"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateInput_1 = require("../../../inputs/QueryCreateInput");
const QueryUpdateInput_1 = require("../../../inputs/QueryUpdateInput");
const QueryWhereUniqueInput_1 = require("../../../inputs/QueryWhereUniqueInput");
let UpsertQueryArgs = class UpsertQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryWhereUniqueInput_1.QueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryWhereUniqueInput_1.QueryWhereUniqueInput)
], UpsertQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateInput_1.QueryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryCreateInput_1.QueryCreateInput)
], UpsertQueryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateInput_1.QueryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryUpdateInput_1.QueryUpdateInput)
], UpsertQueryArgs.prototype, "update", void 0);
UpsertQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertQueryArgs);
exports.UpsertQueryArgs = UpsertQueryArgs;
