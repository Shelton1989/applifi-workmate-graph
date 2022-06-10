"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeUpdateInput_1 = require("../../../inputs/SizeUpdateInput");
const SizeWhereUniqueInput_1 = require("../../../inputs/SizeWhereUniqueInput");
let UpdateSizeArgs = class UpdateSizeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateInput_1.SizeUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateInput_1.SizeUpdateInput)
], UpdateSizeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], UpdateSizeArgs.prototype, "where", void 0);
UpdateSizeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSizeArgs);
exports.UpdateSizeArgs = UpdateSizeArgs;
