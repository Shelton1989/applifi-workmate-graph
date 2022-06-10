"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorWhereInput_1 = require("../../../inputs/ColorWhereInput");
let DeleteManyColorArgs = class DeleteManyColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], DeleteManyColorArgs.prototype, "where", void 0);
DeleteManyColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyColorArgs);
exports.DeleteManyColorArgs = DeleteManyColorArgs;
