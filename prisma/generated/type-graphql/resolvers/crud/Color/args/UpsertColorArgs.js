"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateInput_1 = require("../../../inputs/ColorCreateInput");
const ColorUpdateInput_1 = require("../../../inputs/ColorUpdateInput");
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
let UpsertColorArgs = class UpsertColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], UpsertColorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateInput_1.ColorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateInput_1.ColorCreateInput)
], UpsertColorArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateInput_1.ColorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateInput_1.ColorUpdateInput)
], UpsertColorArgs.prototype, "update", void 0);
UpsertColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertColorArgs);
exports.UpsertColorArgs = UpsertColorArgs;
