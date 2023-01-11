"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationWhereInput_1 = require("../../../inputs/LocationWhereInput");
let DeleteManyLocationArgs = class DeleteManyLocationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereInput_1.LocationWhereInput)
], DeleteManyLocationArgs.prototype, "where", void 0);
DeleteManyLocationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLocationArgs);
exports.DeleteManyLocationArgs = DeleteManyLocationArgs;
