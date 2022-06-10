"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateInput_1 = require("../../../inputs/SizeCreateInput");
const SizeUpdateInput_1 = require("../../../inputs/SizeUpdateInput");
const SizeWhereUniqueInput_1 = require("../../../inputs/SizeWhereUniqueInput");
let UpsertSizeArgs = class UpsertSizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], UpsertSizeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateInput_1.SizeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateInput_1.SizeCreateInput)
], UpsertSizeArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateInput_1.SizeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateInput_1.SizeUpdateInput)
], UpsertSizeArgs.prototype, "update", void 0);
UpsertSizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSizeArgs);
exports.UpsertSizeArgs = UpsertSizeArgs;
